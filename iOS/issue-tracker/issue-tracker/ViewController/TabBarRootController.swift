import UIKit

class TabBarRootController: UITabBarController {

    private let userInfoViewModel = UserInfoViewModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        bind()
    }
    
    private func bind() {
        userInfoViewModel.configureThumbnailImage()
        userInfoViewModel.didUpdateThumbnailImage { [weak self] url in
            guard let imageURL = URL(string: url) else { return }
            let imageData = try? Data(contentsOf: imageURL)
            guard let data = imageData, let image = UIImage(data: data) else { return }
            let imageSize: CGFloat = 20
            
            guard let lastView = self?.tabBar.subviews.last else { return }
            
            let x = (lastView.frame.width / 2) - (imageSize / 2)
            let y = (lastView.frame.height / 2) - (lastView.frame.height / 10) * 3.3
            let imageView = UIImageView(frame: CGRect(origin: CGPoint(x: x, y: y), size: CGSize(width: imageSize, height: imageSize)))
            
            imageView.layer.cornerRadius = 10
            imageView.clipsToBounds = true
            imageView.image = image
            self?.tabBar.items?.last?.image = nil
            self?.tabBar.subviews.last?.addSubview(imageView)
        }
    }
    
}
