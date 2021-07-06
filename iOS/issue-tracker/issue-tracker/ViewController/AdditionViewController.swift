import UIKit

class AdditionViewController: UIViewController {

    @IBOutlet weak var viewTitle: UILabel!
    @IBOutlet weak var titleTextField: UITextField!
    @IBOutlet weak var descriptionTextField: UITextField!
    @IBOutlet weak var attributeTitle: UILabel!
    @IBOutlet weak var attributeTextField: UITextField!
    @IBOutlet weak var randomColorButton: UIButton!
    @IBOutlet weak var labelPreview: UIView!
    @IBOutlet weak var labelBackgroundView: UIView!
    @IBOutlet weak var labelText: UILabel!
    @IBOutlet weak var saveButton: UIButton!
    
    private var additionLabelViewModel = AdditionLabelViewModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        configureTextField()
    }

    private func configureTextField() {
        self.titleTextField.delegate = self
        self.descriptionTextField.delegate = self
        self.attributeTextField.delegate = self
    }
    
    private func correctButton() {
        if titleTextField.text == "" || !additionLabelViewModel.isCorrect(color: attributeTextField.text!) {
            self.saveButton.isEnabled = false
        } else {
            self.saveButton.isEnabled = true
        }
    }
    
}

extension AdditionViewController: UITextFieldDelegate {
    func textFieldDidEndEditing(_ textField: UITextField) {
        switch textField {
        case self.titleTextField:
            print(textField.text)
        case self.descriptionTextField:
            print(textField.text)
        case self.attributeTextField:
            guard let text = textField.text else {
                return
            }
            print(additionLabelViewModel.isCorrect(color: text))
        default:
            break
        }
        correctButton()
    }
}
