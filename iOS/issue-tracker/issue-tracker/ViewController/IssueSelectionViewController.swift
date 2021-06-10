import UIKit

class IssueSelectionViewController: UIViewController {

    @IBOutlet weak var issueSelectionToolBar: UIToolbar!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureToolBarLabel()
    }
    
    func configureToolBarLabel() {
        let label = UILabel(frame: .zero)
        label.text = "1개의 이슈가 선택됨"
        label.sizeToFit()
        let toolBarLabel = UIBarButtonItem(customView: label)
        let flexible = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: nil, action: nil)
        issueSelectionToolBar.setItems([configureLeftToolBarItem(), flexible, toolBarLabel, flexible, configureRightToolBarItem()], animated: true)
    }
    
    func configureLeftToolBarItem() -> UIBarButtonItem {
        let image = UIImage(systemName: "checkmark.circle.fill")
        let item = UIBarButtonItem(image: image, style: .plain, target: self, action: nil)
        return item
    }
    
    func configureRightToolBarItem() -> UIBarButtonItem {
        let image = UIImage(systemName: "archivebox")
        let item = UIBarButtonItem(image: image, style: .plain, target: self, action: nil)
        return item
    }
}
