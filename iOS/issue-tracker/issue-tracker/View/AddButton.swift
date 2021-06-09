//
//  AddButton.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/09.
//

import UIKit
import SnapKit

class AddButton: UIStackView {
    
    var addText: UILabel = {
        var label = UILabel()
        label.text = "추가"
        return label
    }()
    
    var addImage: UIImageView = {
        var imageView = UIImageView()
        imageView.image = UIImage(systemName: "plus")
        return imageView
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setStackView()
        setAutolayout()
    }
    
    required init(coder: NSCoder) {
        super.init(coder: coder)
        setStackView()
        setAutolayout()
    }
    
    func setStackView() {
        self.axis = .horizontal
        self.alignment = .fill
        self.distribution = .fill
        self.spacing = 4
        
        addViews()
    }

    func addViews() {
        self.addArrangedSubview(addText)
        self.addArrangedSubview(addImage)
    }
    
    func setAutolayout() {
        addText.snp.makeConstraints { text in
            text.width.equalTo(32)
            text.height.equalTo(22)
        }
        
        addImage.snp.makeConstraints { image in
            image.width.equalTo(17)
            image.height.equalTo(21)
        }
    }
}
