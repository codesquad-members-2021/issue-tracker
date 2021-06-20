//
//  ThreeLineInputStackView.swift
//  issue-tracker
//
//  Created by Song on 2021/06/18.
//

import UIKit

struct InputLineItem {
    let category: String
    let inputView: UIView
}

final class MultipleLineInputStackView: UIStackView {
    
    private lazy var lineHeight: CGFloat = {
        return frame.height / 3
    }()
    
    private lazy var elementSpacing: CGFloat = {
        return lineHeight / 2
    }()
    
    //마일스톤 날짜 체크를 위해 따로 생성.
    private var lastItemLabel: UILabel = {
        let label = UILabel()
        return label
    }()
        
    private var items: [InputLineItem]?
    private let borderColor = Colors.border.cgColor
    private let borderWidth: CGFloat = 1
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }

    private func configure() {
        backgroundColor = UIColor.white
        axis = .vertical
        distribution = .fillEqually
        translatesAutoresizingMaskIntoConstraints = false
    }
    
    func configure(with items: [InputLineItem]) {
        self.items = items
        
        items.enumerated().forEach { index, inputLineItem in
            let containerFrame = CGRect(x: 0, y: 0, width: frame.width, height: lineHeight)
            let container = UIView(frame: containerFrame)
            
            let category = inputLineItem.category
            
            var titleLabel: UILabel
            
            if index == 2 { //마일스톤 데이트체크를 위한 라벨. 하드코딩느낌.. 라벨 배열을 만들어야 할지 헷갈림.
                titleLabel = lastItemLabel
            }else {
                titleLabel = UILabel()
            }
            
            titleLabel.text = category
            titleLabel.translatesAutoresizingMaskIntoConstraints = false
            
            container.addSubview(titleLabel)
            NSLayoutConstraint.activate([
                titleLabel.leadingAnchor.constraint(equalTo: container.safeAreaLayoutGuide.leadingAnchor, constant: elementSpacing),
                titleLabel.centerYAnchor.constraint(equalTo: container.safeAreaLayoutGuide.centerYAnchor)
            ])
            
            let inputView = inputLineItem.inputView
            inputView.translatesAutoresizingMaskIntoConstraints = false
            
            container.addSubview(inputView)
            NSLayoutConstraint.activate([
                inputView.leadingAnchor.constraint(equalTo: container.safeAreaLayoutGuide.leadingAnchor, constant: elementSpacing * 5),
                inputView.trailingAnchor.constraint(equalTo: container.safeAreaLayoutGuide.trailingAnchor, constant: -elementSpacing),
                inputView.centerYAnchor.constraint(equalTo: container.safeAreaLayoutGuide.centerYAnchor)
            ])
            addArrangedSubview(container)
        }
        addDivisionLines()
    }
    
    //[요구사항] 마일스톤 날짜뷰 형식에 안맞으면 해당 라벨 색상 변경 필요.
    func setLabelColor(correct: Bool) {
        if correct {
            lastItemLabel.textColor = Colors.mainGrape
        }else {
            lastItemLabel.textColor = UIColor.red
        }
    }
    
    private func addDivisionLines() {
        guard let itemCount = items?.count, itemCount >= 2 else { return }
        
        let size = CGSize(width: frame.width - elementSpacing, height: borderWidth)
        
        for i in 1...itemCount-1 {
            let line = CALayer()
            let origin = CGPoint(x: spacing, y: lineHeight * CGFloat(i) - borderWidth)
            line.frame = CGRect(origin: origin, size: size)
            line.backgroundColor = borderColor
            layer.addSublayer(line)
        }
    }
}
