import Foundation
import Combine

// 내일 버튼 바인드 하기

class AdditionLabelViewModel {

    @Published private var isCorrectColor: Bool
    @Published private var isEnableSaveButton: Bool
    private var title: String
    private var description: String?
    private var backgroundColor: String
    
    init() {
        self.title = ""
        self.description = nil
        self.backgroundColor = ""
        self.isEnableSaveButton = false
        self.isCorrectColor = false
    }
    
    func configureTitle(_ title: String) {
        self.title = title
        self.isEnableSaveButton = self.isCorrectColor && isNotEmptyTitle()
    }
    
    func configureDescription(_ description: String) {
        self.description = description
    }
    
    func configureBackgroundColor(_ color: String) {
        self.backgroundColor = color
        self.isCorrectColor = isCorrect(color: color)
        self.isEnableSaveButton = self.isCorrectColor && isNotEmptyTitle()
    }
    
    func didUpdateCorrectColor() -> AnyPublisher<Bool, Never> {
        return $isCorrectColor
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
    
    func didUpdateSaveButton() -> AnyPublisher<Bool, Never> {
        return $isEnableSaveButton
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
    
    private func isNotEmptyTitle() -> Bool {
        return self.title.isEmpty == false
    }
    
    private func isCorrect(color: String) -> Bool {
        return isCorrectFirstString(color)
            && isCorrectStringCount(color)
            && isCorrectColorRange(color)
    }
    
    private func isCorrectFirstString(_ string: String) -> Bool {
        if let firstString = string.first, firstString == "#" {
            return true
        } else {
            return false
        }
    }
    
    private func isCorrectStringCount(_ string: String) -> Bool {
        return string.count == 7
    }
    
    private func isCorrectColorRange(_ string: String) -> Bool {
        let colorString = string.uppercased().dropFirst()
        for character in colorString {
            if character < "0" || character > "F" {
                return false
            }
        }
        return true
    }
    
}
