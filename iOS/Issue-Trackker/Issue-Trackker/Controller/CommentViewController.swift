//
//  CommentViewController.swift
//  Issue-Trackker
//
//  Created by 심영민 on 2021/06/14.
//

import UIKit

class CommentViewController: UIViewController {
    
    @IBOutlet weak var commentTextField: UITextField!
    @IBOutlet weak var commentTableView: UITableView!
    override func viewDidLoad() {
        super.viewDidLoad()
        let sendButton = UIButton()
        sendButton.setImage(UIImage(named: "ButtonSend.png"), for: .normal)
        commentTextField.rightView = sendButton
        commentTextField.rightViewMode = .always
        setNavigationItem()
    }
    
    func setNavigationItem() {
        let leftButton = UIButton.setButton(image: "Icon.png", title: " 목록")
        leftButton.addTarget(self, action: #selector(backButtonTouched(_ :)), for: .touchUpInside)
        
        let rightButton = UIButton.setButton(image: "more.png", title: "")
        self.navigationController?.navigationBar.prefersLargeTitles = false
        self.navigationItem.leftBarButtonItem = UIBarButtonItem(customView: leftButton)
        self.navigationItem.rightBarButtonItem = UIBarButtonItem(customView: rightButton)
    }
    
    @objc func backButtonTouched(_ sender: UIButton) {
        self.dismiss(animated: true, completion: nil)
    }
}

extension CommentViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 2
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "CommentCell") as? CommentCell else {
            return CommentCell()
        }
        return cell
    }
}
