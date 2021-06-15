//
//  MileStoneTableViewCell.swift
//  issue-tracker
//
//  Created by jinseo park on 6/15/21.
//

import UIKit

class MileStoneTableViewCell: UITableViewCell {

    private let spacing: CGFloat = 16
    
    //스택을 만들고 UIEdge = 24
    private lazy var mileStoneStackView: UIStackView = {
        let superStackView = UIStackView() //커다란 SuperStack
        superStackView.axis = .vertical
        superStackView.distribution = .fillProportionally
        superStackView.translatesAutoresizingMaskIntoConstraints = false
        
        let firstSubStackView = UIStackView()
        firstSubStackView.axis = .horizontal
        firstSubStackView.spacing = spacing * 0.5
        firstSubStackView.distribution = .fillProportionally
        firstSubStackView.layoutMargins = UIEdgeInsets(top: 0, left: spacing, bottom: 0, right: spacing)
        firstSubStackView.isLayoutMarginsRelativeArrangement = true
                
        
        let titleLabel = UILabel()
        titleLabel.text = "잭잭잭"
        titleLabel.font = .systemFont(ofSize: 17)
        let completenessLabel = UILabel()
        completenessLabel.text = "100%"
        completenessLabel.font = .systemFont(ofSize: 17)
        
        firstSubStackView.addArrangedSubview(titleLabel)
        firstSubStackView.addArrangedSubview(completenessLabel)
        
        superStackView.addArrangedSubview(firstSubStackView)
        //1 : sub스택
        //   -1 Title 라벨
        //   -2 몇 %인지 보이는 두개의 라벨
        //2 : 마일스톤에 대한 설명 라벨
        //3 : 완료일 라벨
        //4 : sub스택
        //   -1 열린 이슈 라벨
        //   -2 닫힌 이슈 라벨
        
        return superStackView
    }()
    
    static var reuseID: String {
        return String(describing: self)
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setViews()
    }
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        setViews()
    }
        
    private func setViews() {
        backgroundColor = Colors.mainGrape
        addMileStoneStackView()
    }
    
    private func addMileStoneStackView() {
        addSubview(mileStoneStackView)
        
        NSLayoutConstraint.activate([
            mileStoneStackView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: spacing),
            mileStoneStackView.topAnchor.constraint(equalTo: topAnchor, constant: spacing * 1.5)
        ])
    }
}
