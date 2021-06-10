//
//  PhotoManager.swift
//  issue-tracker
//
//  Created by 박혜원 on 2021/06/10.
//

import Foundation
import Photos

class PhotoManager {
    
    var allPhotos: PHFetchResult<PHAsset>
    static var shared = PhotoManager()
    
    private init(){
        allPhotos = PHFetchResult<PHAsset>()
    }
    
    func requestPhotos() {
        PHPhotoLibrary.requestAuthorization { (status) in
            switch status {
            case .authorized:
                self.allPhotos = PHAsset.fetchAssets(with: nil)
            default:
                break
            }
        }
    }
    
    func authorization() {
        let status = PHPhotoLibrary.authorizationStatus()
        switch status {
        case .authorized:
            self.allPhotos = PHAsset.fetchAssets(with: nil)
        default:
            break
        }
    }
}
