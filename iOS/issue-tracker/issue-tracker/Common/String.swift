//
//  String.swift
//  issue-tracker
//
//  Created by jinseo park on 6/20/21.
//

import Foundation

extension String {
    enum ValidityType {
        case date
    }
    enum Regex: String {        
        case date = "[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]"
    }
    func isValid(_ validityType: ValidityType)-> Bool {
        let format = "SELF MATCHES %@"
        var regex = ""
        
        switch validityType {
        case .date:
            regex = Regex.date.rawValue
        }
        return NSPredicate(format: format, regex).evaluate(with: self)
    }
}
