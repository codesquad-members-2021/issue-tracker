//
//  AddButton.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/09.
//

import UIKit
import SnapKit

class AddButton: UIView {
    
    var addText: UILabel = {
        var label = UILabel()
        label.text = "추가"
        label.textColor = .systemBlue
        return label
    }()
    
    var addImage: UIImageView = {
        var imageView = UIImageView()
        imageView.image = UIImage(systemName: "plus")
        return imageView
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        addViews()
        setAutolayout()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setAutolayout()
    }

    func addViews() {
        self.addSubview(addText)
        self.addSubview(addImage)
    }
    
    func setAutolayout() {
        addText.snp.makeConstraints { text in
            text.top.leading.equalTo(10)
            text.width.equalTo(32)
            text.height.equalTo(22)
        }
        
        addImage.snp.makeConstraints { image in
            image.top.equalTo(10)
            image.leading.equalTo(addText.snp.trailing).offset(10)
            image.width.equalTo(17)
            image.height.equalTo(21)
        }
    }
}
