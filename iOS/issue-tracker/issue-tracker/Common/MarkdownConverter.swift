//
//  MarkdownConverter.swift
//  issue-tracker
//
//  Created by Song on 2021/06/22.
//

import Foundation
import SwiftyMarkdown

struct MarkdownConverter {
    
    private var customBullet: String?
    var rawText = ""
    
    init(customBullet: String? = nil) {
        self.customBullet = customBullet
    }
    
    func preview(rawText: String) -> NSAttributedString {
        let markdown = SwiftyMarkdown(string: rawText)
        setCustomBullet(to: markdown)
        return markdown.attributedString()
    }
    
    private func setCustomBullet(to markdown: SwiftyMarkdown) {
        guard let customBullet = customBullet else { return }
        markdown.bullet = customBullet
    }
}
