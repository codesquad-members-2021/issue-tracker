//
//  AddIssueViewController.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/11.
//

import UIKit

class AddIssueViewController: UIViewController {

    @IBOutlet weak var cancelButton: UIButton!
    @IBOutlet weak var saveButton: UIButton!
    @IBOutlet weak var markdownSegmentedControl: UISegmentedControl!
    @IBOutlet weak var commentTextField: UITextField!
    @IBOutlet weak var titleTextField: UITextField!
    @IBOutlet weak var moreInformationView: UIView!
    override func viewDidLoad() {
        super.viewDidLoad()

    }
}
