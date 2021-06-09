//
//  LabelTabelHeaderView.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/09.
//

import UIKit
import SnapKit

class LabelTabelHeaderView: UIView {
    
    var title: UILabel = {
       var label = UILabel()
        label.text = "레이블"
        label.font = UIFont.boldSystemFont(ofSize: 34)
        return label
    }()
    
    var line: UIView = {
        var view = UIView()
        view.backgroundColor = .lightGray
        return view
    }()
    
    var button = AddButton()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        addSubViews()
        setAutolayout()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        addSubViews()
        setAutolayout()
    }
    
    func addSubViews() {
        self.addSubview(title)
        self.addSubview(button)
        self.addSubview(line)
    }
    
    func setAutolayout() {
        title.snp.makeConstraints { title in
            title.top.equalToSuperview().offset(91)
            title.leading.equalToSuperview().offset(16)
            title.width.equalTo(94)
            title.height.equalTo(41)
        }
        
        button.snp.makeConstraints { button in
            button.width.equalTo(85)
            button.height.equalTo(44)
            button.top.trailing.equalToSuperview()
        }
        
        line.snp.makeConstraints { line in
            line.leading.trailing.bottom.equalToSuperview()
            line.height.equalTo(1)
        }
    }
}
