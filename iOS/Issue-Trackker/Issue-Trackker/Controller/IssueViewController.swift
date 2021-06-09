//
//  IssueViewController.swift
//  Issue-Trackker
//
//  Created by 심영민 on 2021/06/08.
//

import UIKit

class IssueViewController: UIViewController, UISearchBarDelegate {

    private var searchController: UISearchController?
    @IBOutlet weak var issueCollectionView: UICollectionView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.searchController = UISearchController()
        self.searchController?.searchBar.delegate = self
        self.searchController?.hidesNavigationBarDuringPresentation = true
        self.navigationItem.title = "이슈"
        self.navigationController?.navigationBar.prefersLargeTitles = true
        self.navigationItem.searchController = searchController
        self.navigationItem.hidesSearchBarWhenScrolling = true
        setButton()
    }
    
    func setButton() {
        let filtetrButton = UIButton()
        filtetrButton.setImage(UIImage(named: "filter.png"), for: .normal)
        //leftBarButton.addTarget(self, action: nil, for: .touchUpInside)
        filtetrButton.setTitle(" 필터", for: .normal)
        filtetrButton.setTitleColor(UIColor(red: 0, green: 0.478, blue: 1, alpha: 1), for: .normal)
        let leftBarButton = UIBarButtonItem(customView: filtetrButton)
        
        let selectButton = UIButton()
        selectButton.semanticContentAttribute = .forceRightToLeft
        selectButton.setImage(UIImage(named: "select.png"), for: .normal)
        selectButton.setTitle("선택 ", for: .normal)
        selectButton.setTitleColor(UIColor(red: 0, green: 0.478, blue: 1, alpha: 1), for: .normal)

        let rightBarButton = UIBarButtonItem(customView: selectButton)
        
        self.navigationItem.leftBarButtonItem = leftBarButton
        self.navigationItem.rightBarButtonItem = rightBarButton
        
    }
}

extension IssueViewController: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 5
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "IssueCell", for: indexPath) as? IssueCell else {
            return IssueCell()
        }
        
        return cell
    }
    
    func collectionView(_ collectionView: UICollectionView, viewForSupplementaryElementOfKind kind: String, at indexPath: IndexPath) -> UICollectionReusableView {
        let footerView = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: "IssueCellFooter", for: indexPath)
        return footerView
    }
}

//extension IssueViewController: UICollectionViewDelegate {
//    collectioView
//}

