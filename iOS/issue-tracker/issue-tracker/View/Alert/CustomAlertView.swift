//
//  PositiveAlertView.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/23.
//

import UIKit
import SnapKit

final class CustomAlertView: UIView {

    static let shared = CustomAlertView()

    private var contentView: ContentView = {
        var view = ContentView()
        return view
    }()

    private var contentImage: UIImageView = {
        var imageView = UIImageView()
        imageView.image = UIImage(named: "success")
        imageView.layer.masksToBounds = true
        imageView.layer.borderWidth = 2
        imageView.layer.borderColor = UIColor.white.cgColor
        imageView.layer.cornerRadius = 40
        return imageView
    }()

    private var alertType: AlertType = .failure
    private var handler: (() -> Void)?

    override init(frame: CGRect) {
        super.init(frame: frame)
        backgroundColor = .clear
        addSubview(contentView)
        addSubview(contentImage)
        setUpAutoLayout()
        contentView.button.addTarget(self, action: #selector(dismiss), for: .touchUpInside)
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        backgroundColor = .clear
        addSubview(contentView)
        addSubview(contentImage)
        setUpAutoLayout()
        contentView.button.addTarget(self, action: #selector(dismiss), for: .touchUpInside)
    }

    private func setUpAutoLayout() {
        contentView.snp.makeConstraints { view in
            view.centerX.centerY.equalToSuperview()
            view.leading.trailing.equalToSuperview().inset(50)
            view.height.equalTo(250)
        }
        contentImage.snp.makeConstraints { image in
            image.centerY.equalTo(contentView.snp.top)
            image.centerX.equalToSuperview()
            image.height.width.equalTo(80)
        }
    }

    func setUpAlertView(title: String, message: String, buttonTitle: String, alertType: AlertType, buttonHandler: (() -> Void)?) {
        self.frame = UIScreen.main.bounds
        switch alertType {
        case .success:
            contentImage.image = UIImage(named: "success")
            contentView.button.backgroundColor = .systemGreen
        case .failure:
            contentImage.image = UIImage(named: "failure")
            contentView.button.backgroundColor = .red
        }
        contentView.titleLabel.text = title
        contentView.descriptionLabel.text = message
        contentView.button.setTitle(buttonTitle, for: .normal)

        UIApplication.shared.connectedScenes
            .filter({$0.activationState == .foregroundActive})
            .map({$0 as? UIWindowScene})
            .compactMap({$0})
            .first?.windows
            .filter({$0.isKeyWindow}).first?
            .addSubview(self)

        handler = buttonHandler
    }

    @objc private func dismiss() {
        self.removeFromSuperview()
        handler?()
    }
}

enum AlertType {
    case success
    case failure
}

final class ContentView: UIView {
    var titleLabel: UILabel = {
        var label = UILabel()
        label.font = UIFont.boldSystemFont(ofSize: 26)
        label.textAlignment = .center
        return label
    }()

    var descriptionLabel: UILabel = {
        var label = UILabel()
        label.font = UIFont.systemFont(ofSize: 16)
        label.numberOfLines = 2
        label.textAlignment = .center
        return label
    }()

    var button: UIButton = {
        var button = UIButton()
        return button
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        addSubview(titleLabel)
        addSubview(descriptionLabel)
        addSubview(button)
        backgroundColor = .white
        layer.masksToBounds = true
        layer.cornerRadius = 20
        setUpAutoLayout()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        addSubview(titleLabel)
        addSubview(descriptionLabel)
        addSubview(button)
        backgroundColor = .white
        layer.masksToBounds = true
        layer.cornerRadius = 20
        setUpAutoLayout()
    }

    private func setUpAutoLayout() {
        titleLabel.snp.makeConstraints { title in
            title.top.equalToSuperview().inset(60)
            title.leading.trailing.equalToSuperview().inset(10)
            title.height.equalTo(30)
        }
        descriptionLabel.snp.makeConstraints { label in
            label.top.equalTo(titleLabel.snp.bottom).offset(20)
            label.leading.trailing.equalToSuperview().inset(10)
            label.height.equalTo(60)
        }
        button.snp.makeConstraints { button in
            button.bottom.equalToSuperview().inset(10)
            button.leading.trailing.equalToSuperview().inset(10)
            button.height.equalTo(50)
        }
    }
}
