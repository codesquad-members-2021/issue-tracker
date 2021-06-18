//
//  TabBarRootController.swift
//  issue-tracker
//
//  Created by user on 2021/06/17.
//

import UIKit

class TabBarRootController: UITabBarController {

    private var userInfoViewModel = UserInfoViewModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        bind()
    }
    
    func bind() {
        userInfoViewModel.configureThumbnailImage()
        userInfoViewModel.didUpdateThumbnailImage { [weak self] url in
            guard let imageURL = URL(string: url) else { return }
            let imageData = try? Data(contentsOf: imageURL)
            guard let data = imageData else { return }
            var image = UIImage(data: data)!
            let size = CGSize(width: 30, height: 30)
            let rect = CGRect(x: 0, y: 0, width: size.width, height: size.height)
            UIGraphicsBeginImageContextWithOptions(size, false, 1.0)
            image.draw(in: rect)
            image = UIGraphicsGetImageFromCurrentImageContext()!
            UIGraphicsEndImageContext()
            self?.tabBar.items?.last?.image = image.withRenderingMode(UIImage.RenderingMode.alwaysOriginal)
        }
    }
}
