import Vision
import AppKit
import Foundation

func ocr(imagePath: String) {
    guard let img = NSImage(contentsOfFile: imagePath) else {
        print("ERROR: Cannot load \(imagePath)")
        return
    }
    guard let cgImg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
        print("ERROR: Cannot get cgImage for \(imagePath)")
        return
    }

    let request = VNRecognizeTextRequest { (request, error) in
        if let error = error {
            print("ERROR: \(error)")
            return
        }
        guard let observations = request.results as? [VNRecognizedTextObservation] else {
            print("No text found in \(imagePath)")
            return
        }
        for obs in observations {
            if let top = obs.topCandidates(1).first {
                print(top.string)
            }
        }
    }
    request.recognitionLevel = .accurate
    request.usesLanguageCorrection = true
    request.recognitionLanguages = ["zh-Hans", "zh-Hant", "en"]

    let handler = VNImageRequestHandler(cgImage: cgImg, options: [:])
    do {
        try handler.perform([request])
    } catch {
        print("ERROR performing request: \(error)")
    }
}

let args = CommandLine.arguments
if args.count < 2 {
    print("Usage: swift ocr.swift <image-path>")
    exit(1)
}

let imgPath = args[1]
ocr(imagePath: imgPath)
