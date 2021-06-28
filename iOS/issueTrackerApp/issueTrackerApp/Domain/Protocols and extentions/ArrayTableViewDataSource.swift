//
//  ArrayTableViewDataSource.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/12.
//

import UIKit

protocol ArrayTableViewDataSource: class {
    associatedtype ModelType
    associatedtype ViewModel
    associatedtype Cell: UITableViewCell
    var dataOrganizer: ArrayDataSourceOrganizer<ModelType> { get }
    var viewModelCache: [IndexPath: ViewModel] { get set }
    func viewModel(for value: ModelType) -> ViewModel
    func configure(cell: Cell, with viewModel: ViewModel)
}

extension ArrayTableViewDataSource {
    var rowsCount: Int {
        return dataOrganizer.rowsCount
    }
    
    func cell(from tableView: UITableView, for indexPath: IndexPath) -> Cell {
        func extractViewModel(at indexPath: IndexPath) -> ViewModel {
            let viewModel: ViewModel
            if let cachedViewModel = viewModelCache[indexPath] {
                viewModel = cachedViewModel
            } else {
                let value = dataOrganizer[indexPath]
                viewModel = self.viewModel(for: value)
                viewModelCache[indexPath] = viewModel
            }
            return viewModel
        }
        
        let cell: Cell = tableView.dequeueReusableCell(for: indexPath)
        configure(cell: cell, with: extractViewModel(at: indexPath))
        return cell
    }
}

struct ArrayDataSourceOrganizer<ModelType> {
    let items: [ModelType]
    
    var rowsCount: Int {
        return items.count
    }
    
    subscript(indexPath: IndexPath) -> ModelType {
        return items[indexPath.row]
    }
}

