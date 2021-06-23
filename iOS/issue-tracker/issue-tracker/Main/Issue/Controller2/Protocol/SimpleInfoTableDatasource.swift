//
//  SimpleInfoTableDatasource.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import UIKit

protocol SimpleInfoTableDatasource: UITableViewDataSource {
    func update(with infos: [Identifiable])
    func info(for index: Int) -> Identifiable?
    func index(for info: Identifiable) -> Int?
}
