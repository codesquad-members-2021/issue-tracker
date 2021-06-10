//
//  PhotoViewController.swift
//  issue-tracker
//
//  Created by 박혜원 on 2021/06/10.
//

import UIKit

class PhotoViewController: UIViewController, ReuseIdentity {
    
    @IBOutlet weak var album: UICollectionView!
    
    private var photoDataSource = PhotoDataSource()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        PhotoManager.shared.requestPhotos()
        PhotoManager.shared.authorization()
        
        self.album.dataSource = photoDataSource
        
        self.album.reloadData()
    }

}
