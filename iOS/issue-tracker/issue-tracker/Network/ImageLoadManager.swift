//
//  ImageDownloadManager.swift
//  issue-tracker
//
//  Created by Song on 2021/06/11.
//

import Foundation
import Alamofire

final class ImageLoadManager {
    
    private let cacheURL = FileManager.default.urls(for: .cachesDirectory, in: .userDomainMask)[0]

    func load(from imageUrl: String, completionHandler: @escaping (String) -> ()) {
        guard let fileName = URL(string: imageUrl)?.lastPathComponent else { return }
        
        if let cache = availableCache(of: fileName) {
            return completionHandler(cache)
        }
        
        let request = downloadRequest(of: imageUrl, fileName: fileName)
        request.responseURL { response in
            if response.error == nil, let filePath = response.fileURL?.path {
                completionHandler(filePath)
            }
        }
    }
    
    private func availableCache(of fileName: String) -> String? {
        let expectedPath = cacheURL.path + "/\(fileName)"
        return FileManager.default.fileExists(atPath: expectedPath) ? expectedPath : nil
    }
    
    private func downloadRequest(of imageURL: String, fileName: String) -> DownloadRequest {
        let destination: DownloadRequest.Destination = { _,_ in
            let fileURL = self.cacheURL.appendingPathComponent(fileName)
            return (fileURL, [.removePreviousFile, .createIntermediateDirectories])
        }
        return AF.download(imageURL, to: destination)
    }
    
}
