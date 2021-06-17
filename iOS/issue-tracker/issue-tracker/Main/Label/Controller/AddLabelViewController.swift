//
//  AddLabelViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/16.
//

import UIKit

final class AddLabelViewController: UIViewController {
    
    private lazy var topMenuView: UIView = {
        let container = UIView()
        container.translatesAutoresizingMaskIntoConstraints = false
        container.addSubview(saveButton)
        NSLayoutConstraint.activate([
            saveButton.centerYAnchor.constraint(equalTo: container.safeAreaLayoutGuide.centerYAnchor),
            saveButton.widthAnchor.constraint(greaterThanOrEqualToConstant: spacing * 2),
            saveButton.heightAnchor.constraint(equalToConstant: spacing * 1.5),
            saveButton.trailingAnchor.constraint(equalTo: container.safeAreaLayoutGuide.trailingAnchor, constant: -spacing)
        ])
        
        container.addSubview(cancelButton)
        NSLayoutConstraint.activate([
            cancelButton.centerYAnchor.constraint(equalTo: container.safeAreaLayoutGuide.centerYAnchor),
            cancelButton.widthAnchor.constraint(greaterThanOrEqualToConstant: spacing * 2),
            cancelButton.heightAnchor.constraint(equalToConstant: spacing * 1.5),
            cancelButton.leadingAnchor.constraint(equalTo: container.safeAreaLayoutGuide.leadingAnchor, constant: spacing)
        ])
        
        let titleLabel = UILabel()
        titleLabel.text = sceneTitle
        titleLabel.font = .systemFont(ofSize: 18, weight: .bold)
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        container.addSubview(titleLabel)
        NSLayoutConstraint.activate([
            titleLabel.centerXAnchor.constraint(equalTo: container.centerXAnchor),
            titleLabel.centerYAnchor.constraint(equalTo: container.centerYAnchor)
        ])
        return container
    }()
    
    private lazy var cancelButton: ImageBarButton = {
        let button = ImageBarButton()
        button.configure(with: "chevron.backward", "취소")
        button.moveImageToLeft()
        button.translatesAutoresizingMaskIntoConstraints = false
        button.addTarget(self, action: #selector(cancelButtonTouched), for: .touchUpInside)
        return button
    }()
    
    private lazy var saveButton: ImageBarButton = {
        let button = ImageBarButton()
        button.configure(with: "", "저장")
        button.isEnabled = false
        button.translatesAutoresizingMaskIntoConstraints = false
        button.addTarget(self, action: #selector(saveButtonTouched), for: .touchUpInside)
        return button
    }()
  
    private lazy var newLabelEditStackView: UIStackView = {
        let viewWidth = view.frame.width
        let stackViewFrame = CGRect(x: 0, y: 0, width: viewWidth, height: singleLineHeight * 3)
        let stackView = UIStackView(frame: stackViewFrame)
        stackView.backgroundColor = UIColor.white
        stackView.axis = .vertical
        stackView.distribution = .fillEqually
        stackView.translatesAutoresizingMaskIntoConstraints = false
        
        let categories = ["제목", "설명", "배경색"]
        let contentViews: [UIView] = [titleTextfield, descriptionTextfield, backgroundLabel]
        
        categories.enumerated().forEach { (idx, category) in
            let containerFrame = CGRect(x: 0, y: 0, width: viewWidth, height: singleLineHeight)
            let container = UIView(frame: containerFrame)
            
            let titleLabel = UILabel()
            titleLabel.text = category
            titleLabel.translatesAutoresizingMaskIntoConstraints = false
            container.addSubview(titleLabel)
            NSLayoutConstraint.activate([
                titleLabel.leadingAnchor.constraint(equalTo: container.safeAreaLayoutGuide.leadingAnchor, constant: spacing),
                titleLabel.centerYAnchor.constraint(equalTo: container.safeAreaLayoutGuide.centerYAnchor)
            ])
        
            let contentView = contentViews[idx]
            contentView.translatesAutoresizingMaskIntoConstraints = false
            container.addSubview(contentView)
            NSLayoutConstraint.activate([
                contentView.leadingAnchor.constraint(equalTo: container.safeAreaLayoutGuide.leadingAnchor, constant: spacing * 5),
                contentView.trailingAnchor.constraint(equalTo: container.safeAreaLayoutGuide.trailingAnchor, constant: -spacing),
                contentView.centerYAnchor.constraint(equalTo: container.safeAreaLayoutGuide.centerYAnchor)
            ])
            stackView.addArrangedSubview(container)
        }
        guard let backgroundEditView = stackView.arrangedSubviews.last else { return stackView }
        
        backgroundEditView.addSubview(randomColorButton)
        NSLayoutConstraint.activate([
            randomColorButton.widthAnchor.constraint(equalToConstant: singleLineHeight * 0.9),
            randomColorButton.heightAnchor.constraint(equalTo: randomColorButton.safeAreaLayoutGuide.widthAnchor),
            randomColorButton.trailingAnchor.constraint(equalTo: backgroundEditView.safeAreaLayoutGuide.trailingAnchor, constant: -spacing),
            randomColorButton.centerYAnchor.constraint(equalTo: backgroundEditView.safeAreaLayoutGuide.centerYAnchor)
        ])
        return stackView
    }()
    
    private lazy var titleTextfield: UITextField = {
        let textField = UITextField()
        textField.placeholder = "(필수 입력)"
        return textField
    }()
    
    private lazy var descriptionTextfield: UITextField = {
        let textField = UITextField()
        textField.placeholder = "(선택 사항)"
        return textField
    }()
    
    private lazy var backgroundLabel: UILabel = {
        let label = UILabel()
        label.text = "#000000"
        return label
    }()
    
    private lazy var randomColorButton: UIButton = {
        let button = UIButton()
        let refreshImage = UIImage(systemName: "arrow.clockwise")
        button.setImage(refreshImage, for: .normal)
        button.tintColor = UIColor.black
        button.translatesAutoresizingMaskIntoConstraints = false
        button.addTarget(self, action: #selector(randomColorButtonTouched), for: .touchUpInside)
        return button
    }()
    
    private lazy var previewLabel: LabelView = {
        let labelView = LabelView()
        labelView.configure(with: UIColor.black, UIColor.white, "레이블")
        labelView.translatesAutoresizingMaskIntoConstraints = false
        return labelView
    }()
    
    private lazy var singleLineHeight: CGFloat = {
        return view.frame.height * 0.05
    }()
    
    private lazy var spacing: CGFloat = {
        return singleLineHeight * 0.5
    }()
    
    private var loginInfo: LoginInfo?
    private let sceneTitle = "새로운 레이블"
    private let colorConverter: HexColorConvertable = HexColorConverter()
    private var networkManager: NetworkManagerOperations?
    private var dismissOperation: (() -> Void)?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = Colors.background
        
        addTopMenu()
        addEditStackView()
        addLabelPreview()
        setNetworkManager()
        titleTextfield.delegate = self
    }
    
    private func addTopMenu() {
        view.addSubview(topMenuView)
        
        NSLayoutConstraint.activate([
            topMenuView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            topMenuView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            topMenuView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: spacing),
            topMenuView.heightAnchor.constraint(equalToConstant: singleLineHeight)
        ])
    }
    
    private func addEditStackView() {
        view.addSubview(newLabelEditStackView)
        
        NSLayoutConstraint.activate([
            newLabelEditStackView.heightAnchor.constraint(equalToConstant: singleLineHeight * 3),
            newLabelEditStackView.topAnchor.constraint(equalTo: topMenuView.safeAreaLayoutGuide.bottomAnchor, constant: 40),
            newLabelEditStackView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            newLabelEditStackView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor)
        ])
        addLoginStackViewDivisionLine()
    }
    
    private func addLoginStackViewDivisionLine() {
        let borderColor = Colors.border.cgColor
        let borderWidth: CGFloat = 1
        let size = CGSize(width: view.frame.width - spacing, height: borderWidth)
        
        for i in 1...2 {
            let line = CALayer()
            let origin = CGPoint(x: spacing, y: singleLineHeight * CGFloat(i) - borderWidth)
            line.frame = CGRect(origin: origin, size: size)
            line.backgroundColor = borderColor
            newLabelEditStackView.layer.addSublayer(line)
        }
    }
    
    private func addLabelPreview() {
        let backgroundView = UIView()
        backgroundView.backgroundColor = UIColor.systemGray5
        backgroundView.layer.cornerRadius = view.frame.width * 0.07
        backgroundView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(backgroundView)
        backgroundView.addSubview(previewLabel)
        NSLayoutConstraint.activate([
            backgroundView.widthAnchor.constraint(equalToConstant: view.frame.width - spacing * 2),
            backgroundView.heightAnchor.constraint(equalTo: backgroundView.safeAreaLayoutGuide.widthAnchor, multiplier: 0.75),
            backgroundView.centerXAnchor.constraint(equalTo: view.safeAreaLayoutGuide.centerXAnchor),
            backgroundView.topAnchor.constraint(equalTo: newLabelEditStackView.safeAreaLayoutGuide.bottomAnchor, constant: 24),
            previewLabel.centerXAnchor.constraint(equalTo: backgroundView.safeAreaLayoutGuide.centerXAnchor),
            previewLabel.centerYAnchor.constraint(equalTo: backgroundView.safeAreaLayoutGuide.centerYAnchor)
        ])
    }
    
    func setUpDismissOperation(_ operation: @escaping () -> Void) {
        self.dismissOperation = operation
    }
    
    @objc private func cancelButtonTouched(_ sender: UIBarButtonItem) {
        dismiss(animated: true, completion: nil)
    }
    
    @objc private func saveButtonTouched(_ sender: UIBarButtonItem) {
        guard let labelTitle = titleTextfield.text, let colorCode = backgroundLabel.text else { return }
        
        let newLabel = NewLabelDTO(name: labelTitle,
                                   content: descriptionTextfield.text ?? "",
                                   colorCode: colorCode)
        
        postNewLabel(newLabel)
    }
    
    private func postNewLabel(_ newLabel: NewLabelDTO) {
        networkManager?.post(requestBody: newLabel, completion: { [weak self] result in
            switch result {
            case .success(_):
                self?.dismiss(animated: true, completion: {
                    guard let dismissOperation = self?.dismissOperation else { return }
                    dismissOperation()
                })
            case .failure(let error):
                self?.presentAlert(with: error.description)
            }
        })
    }
    
    private func presentAlert(with errorMessage: String) {
        DispatchQueue.main.async {
            let alert = AlertFactory.create(body: errorMessage)
            self.present(alert, animated: true, completion: nil)
        }
    }
    
    @objc private func randomColorButtonTouched(_ sender: UIButton) {
        let hexColor = randomColor()
        backgroundLabel.text = hexColor
        changePreviewLabel(with: hexColor)
    }
    
    private func randomColor() -> String {
        let colorRange = 0...255
        let randomRed = Int.random(in: colorRange)
        let randomGreen = Int.random(in: colorRange)
        let randomBlue = Int.random(in: colorRange)
        
        let hexRed = String(randomRed, radix: 16)
        let hexGreen = String(randomGreen, radix: 16)
        let hexBlue = String(randomBlue, radix: 16)
        return "#\(hexRed)\(hexGreen)\(hexBlue)"
    }
    
    private func changePreviewLabel(with hexColorString: String) {
        let hex = HexColorCode(from: hexColorString)
        let backgroundColor = colorConverter.convertHex(hex)
        let titleColor = colorConverter.isColorDark(hex: hex) ? UIColor.white : UIColor.black
        previewLabel.configure(with: backgroundColor, titleColor, nil)
    }
    
    private func setNetworkManager() {
        let loginInfo = LoginInfo.shared
        guard let jwt = loginInfo.jwt else { return }
        let url = EndPoint.label.fullAddress()
        let headers = [Header.authorization.key(): jwt.description]
        let requestManager = RequestManager(url: url, headers: headers)
        networkManager = NetworkManager(requestManager: requestManager)
    }
}

extension AddLabelViewController: UITextFieldDelegate {
    func textFieldDidChangeSelection(_ textField: UITextField) {
        guard let text = textField.text else { return }
        DispatchQueue.main.async {
            self.saveButton.isEnabled = text.count > 0
        }
    }
}
