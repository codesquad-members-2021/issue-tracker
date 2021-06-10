//
//  LabelTableViewCell.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/09.
//

import UIKit
import SnapKit

class LabelTableViewCell: UITableViewCell {
    
    static var identifier = "LabelTableViewCell"

    var labelView: PaddingLabel = {
        var label = PaddingLabel(withInsets: 0, 0, 10, 10)
        label.textAlignment = .center
        label.textColor = .white
        label.layer.masksToBounds = true
        label.layer.cornerRadius = 15
        return label
    }()
    
    var labelDescription: UILabel = {
        var label = UILabel()
        return label
    }()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        addSubviews()
        setAutolayout()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func addSubviews() {
        addSubview(labelView)
        addSubview(labelDescription)
    }
    
    func setAutolayout() {
        labelView.snp.makeConstraints { view in
            view.top.equalToSuperview().offset(24)
            view.left.equalToSuperview().offset(16)
            view.width.greaterThanOrEqualTo(50)
            view.height.equalTo(30)
        }
        
        labelDescription.snp.makeConstraints { label in
            label.top.equalTo(labelView.snp.bottom).offset(16)
            label.leading.trailing.equalToSuperview().offset(16)
            label.height.equalTo(22)
        }
    }
    
    func setLabelCell(title: String, description: String, color: String) {
        self.labelView.text = title
        self.labelView.backgroundColor = UIColor.hexStringToUIColor(hex: color)
        self.labelDescription.text = description
    }
}
