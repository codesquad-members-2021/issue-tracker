//
//  MoreInfoTableViewDataSource.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/12.
//

import UIKit

class MoreInfoTableViewDataSource: NSObject {
    internal var dataOrganizer: ArrayDataSourceOrganizer<MoreInfo>
    internal var viewModelCache: [IndexPath : MoreInfoCell.ViewModel] = [:]
    
    init(moreInfos: [MoreInfo]) {
        dataOrganizer = ArrayDataSourceOrganizer(items: moreInfos)
        super.init()
    }
}

private extension MoreInfoTableViewDataSource {
    struct DataOrganizer {
        let moreInfos: [MoreInfo]
        
        var rowsCount: Int {
            return moreInfos.count
        }
        
        subscript(indexPath: IndexPath) -> MoreInfo {
            return moreInfos[indexPath.row]
        }
    }
}

extension MoreInfoTableViewDataSource: ArrayTableViewDataSource {
    func viewModel(for value: ModelType) -> MoreInfoCell.ViewModel {
        return MoreInfoCell.ViewModel(moreInfo: value)
    }
    
    func configure(cell: MoreInfoCell, with viewModel: MoreInfoCell.ViewModel) {
        cell.viewModel = viewModel
    }
}

extension MoreInfoTableViewDataSource: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return rowsCount
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        return cell(from: tableView, for: indexPath)
    }
}

