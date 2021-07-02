import UIKit
import Combine

class TabBarRootController: UITabBarController {

    private var userInfoViewModel: UserInfoViewModel!
    private var subscriptions = Set<AnyCancellable>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureViewModel()
        bind()
    }
    
    private func configureViewModel() {
        userInfoViewModel = UserInfoViewModel(userInfoUseCase: DefaultUserInfoUseCase())
    }
    
    private func bind() {
        userInfoViewModel.didUpdateThumbnailImage()
            .sink { [weak self] url in
                DispatchQueue.global().async {
                    guard let imageURL = URL(string: url) else { return }
                    let imageData = try? Data(contentsOf: imageURL)
                    guard let data = imageData, let image = UIImage(data: data) else { return }
                    let imageSize: CGFloat = 20
                    DispatchQueue.main.async {
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
            }.store(in: &subscriptions)
        userInfoViewModel.fetchThumbnailImage()
    }
    
}
