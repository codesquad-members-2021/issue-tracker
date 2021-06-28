//
//  DummyDataLoader.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/12.
//

import Foundation

struct DummyDataLoader {
    static func loadDataFromJSONFile<Model: Decodable>(withName name: String) -> Model? {
        guard let url = Bundle.main.url(forResource: name, withExtension: "json"),
            let data = try? Data(contentsOf: url) else {
                return nil
        }
        let decoder = JSONDecoder()
        decoder.dateDecodingStrategy = .iso8601
        guard let model = try? decoder.decode(Model.self, from: data) else {
            return nil
        }
        return model
    }
}
