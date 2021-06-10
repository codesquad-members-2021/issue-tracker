//
//  PhotoDataSource.swift
//  issue-tracker
//
//  Created by 박혜원 on 2021/06/10.
//

import UIKit
import Photos

class PhotoDataSource: NSObject, UICollectionViewDataSource {
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return PhotoManager.shared.allPhotos.count
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: PhotoCell.reuseIdentifier,
                                                            for: indexPath) as? PhotoCell
        else {
            return UICollectionViewCell()
        }
        
        let asset: PHAsset = PhotoManager.shared.allPhotos.object(at: indexPath.item)
        let imageManager = PHCachingImageManager()
        imageManager.requestImage(for: asset,
                                  targetSize: CGSize(width: 128, height: 128),
                                  contentMode: .aspectFill,
                                  options: nil,
                                  resultHandler: { image, _ in
                                    cell.photo.image = image
                                  })
        return cell
    }

}
