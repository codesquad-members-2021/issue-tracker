//
//  LabelTableViewCell.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/09.
//

import UIKit
import SnapKit

class LabelTableViewCell: UITableViewCell {

    var labelView: UILabel = {
        var label = UILabel()
        label.layer.masksToBounds = true
        label.layer.cornerRadius = 20
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
            view.width.equalTo(114)
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
        var temp = color
        temp.remove(at: temp.startIndex)
        let hexcolor = Int(temp)!
        self.labelView.backgroundColor = UIColor(rgb: hexcolor)
        self.labelDescription.text = description
    }
}
