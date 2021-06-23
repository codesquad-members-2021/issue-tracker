//
//  SimpleAssigneeTableViewCell.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import UIKit

final class AssigneeInfoTableViewCell: UITableViewCell {

    private lazy var titleLabel = UILabel()
    
    private lazy var profileImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
    
    private let spacing: CGFloat = 15
    static let imageManager = ImageLoadManager()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
        configure()
    }
    
    private func configure() {
        selectionStyle = .none
        addImageView()
        addLabelView()
    }
    
    private func addImageView() {
        addSubview(profileImageView)
        
        NSLayoutConstraint.activate([
            profileImageView.centerYAnchor.constraint(equalTo: centerYAnchor),
            profileImageView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: spacing),
            profileImageView.heightAnchor.constraint(equalToConstant: frame.height * 0.8),
            profileImageView.widthAnchor.constraint(equalToConstant: frame.height * 0.8)
        ])
    }

    private func addLabelView() {
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        addSubview(titleLabel)
        
        NSLayoutConstraint.activate([
            titleLabel.centerYAnchor.constraint(equalTo: centerYAnchor),
            titleLabel.leadingAnchor.constraint(equalTo: profileImageView.trailingAnchor, constant: spacing),
            titleLabel.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -spacing * 2)
        ])
    }
    
    static func update(cell: AssigneeInfoTableViewCell, with user: User) -> AssigneeInfoTableViewCell {
        let title = user.name
        cell.titleLabel.text = title
        
        let imageUrl = user.imageUrl
        imageManager.load(from: imageUrl) { cachePath in
            cell.profileImageView.image = UIImage(contentsOfFile: cachePath)
        }
        return cell
    }
    
    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
        accessoryType = selected ? .checkmark : .none
    }
}
