## PaddleOCRV5 Model
This folder represents the repository of the PaddleOCRV5 Model by PaddlePaddle to train the text detection model for Kuria

## Model chosen and motivation behind it
At the time of training the model (2026-02-01), [PPOCRv5 mobile version](https://www.paddleocr.ai/main/en/version3.x/algorithm/PP-OCRv5/PP-OCRv5.html) boasts the highest 
accuracy on Chinese and Japanese text recognition while being less expensive in space, so this was chosen as the base.

You may find PaddleOCR v2 inside this repository. These are for testing and benchmark purposes and will not be included in the project. 

## Dataset
For training and testing, I have chosen CTW Dataset Chinese Text in the Wild to fine-tune our model to detect and recognise Chinese characters as appeared in photos.
However, the dataset is 90GB (including training, test, validation sets) so training time is significantly long. Re-evaluation of dataset may be required due to lack of 
resources and time.
