//
//  AddingIssueViewController.swift
//  Issue-Trackker
//
//  Created by 심영민 on 2021/06/11.
//

import UIKit

class AddingIssueViewController: UIViewController {

    @IBOutlet weak var additionalInformationTableView: UITableView!
    @IBOutlet weak var segmentControl: UISegmentedControl!
        
    override func viewDidLoad() {
        super.viewDidLoad()
        additionalInformationTableView.tableHeaderView = setTableHeaderView()
        setNavigationItem()
    }
    
    func setNavigationItem() {
        let leftButton = UIButton.setButton(image: "Icon.png", title: " 취소")
        leftButton.addTarget(self, action: #selector(backButtonTouched(_ :)), for: .touchUpInside)
        
        let rightButton = UIButton.setButton(image: "plus.png", title: " 저장")
        rightButton.semanticContentAttribute = .forceRightToLeft
        self.navigationController?.navigationBar.prefersLargeTitles = false
        self.navigationItem.leftBarButtonItem = UIBarButtonItem(customView: leftButton)
        self.navigationItem.rightBarButtonItem = UIBarButtonItem(customView: rightButton)
    }
    
    func setTableHeaderView() -> UIView {
        let view = UIView(frame: CGRect(origin: .zero, size: CGSize(width: self.additionalInformationTableView.frame.width, height: 44)))
        
        let label = UILabel(frame: CGRect(origin: .zero,
                                          size: CGSize(width: self.additionalInformationTableView.bounds.width,
                                                       height: 28)))
        label.text = "추가 정보"
        label.font = .boldSystemFont(ofSize: 22)
        view.addSubview(label)
        return view
    }
    
    @objc func backButtonTouched(_ sender: UIButton) {
        self.dismiss(animated: true, completion: nil)
    }
    
    @IBAction func segmentControlTouched(_ sender: UISegmentedControl) {
    }
}

extension AddingIssueViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 3
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "AdditionalInformationCell") as? AdditionalInformationCell else {
            return AdditionalInformationCell()
        }
        
        return cell
    }
    
    
}
