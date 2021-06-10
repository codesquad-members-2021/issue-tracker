//
//  Encoder.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/10.
//

import Foundation

extension Encodable {
    func encode() -> Data {
        let data =  try? JSONEncoder().encode(self)
        return data ?? Data()
    }
}
