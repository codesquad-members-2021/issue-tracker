//
//  SimpleInfoTableDatasource.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import UIKit

protocol SimpleInfoTableDatasource: UITableViewDataSource {
    associatedtype Info
    associatedtype InfoCell
    typealias CellUpdator = (InfoCell, Info) -> InfoCell
    func update(with infos: [Info])
    func info(for index: Int) -> Info?
    func index(for info: Info) -> Int?
    func setCellUpdator(_ updator: @escaping CellUpdator)
}
