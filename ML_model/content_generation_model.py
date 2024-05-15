# # -*- coding: utf-8 -*-
# """gpt2-finetune V1.ipynb

# Automatically generated by Colab.

# Original file is located at
#     https://colab.research.google.com/drive/17QNRu9iTm0SdE0I8_xJYDoZahQnalZqF
# """

# # !pip install transformers
# # !pip install transformers[torch]
# # !pip install accelerate -U

# import pandas as pd

# # Load the dataset
# dataset = pd.read_csv('Dataset.csv')
# print(dataset)

# import os

# # Specify the output directory path
# output_dir = "./gpt2_output"

# # Create the output directory if it doesn't exist
# if not os.path.exists(output_dir):
#     os.makedirs(output_dir)

# # Print the path to verify
# print("Output directory:", output_dir)

# from transformers import (
#     GPT2Tokenizer,
#     GPT2LMHeadModel,
#     TextDataset,
#     DataCollatorForLanguageModeling,
#     Trainer,
#     TrainingArguments,
# )

# # Load pre-trained GPT-2 model and tokenizer
# model_name = "gpt2"
# tokenizer = GPT2Tokenizer.from_pretrained(model_name)
# model = GPT2LMHeadModel.from_pretrained(model_name)

# # Prepare your dataset for training (consider using Datasets library in future)
# train_dataset = TextDataset(
#     tokenizer=tokenizer,
#     file_path="Dataset.csv",  # Update with your data path
#     block_size=256,
# )

# data_collator = DataCollatorForLanguageModeling(
#     tokenizer=tokenizer,
#     mlm=False,
# )

# # Define training arguments (update output_dir)
# learning_rates = [5e-5, 3e-5, 2e-5]
# epochs = 4  # Updated to train for 4 epochs
# batch_size = 4
# output_dir = "output_dir"  # Update with a valid directory

# # Train the model with different configurations
# for lr in learning_rates:
#     training_args = TrainingArguments(
#         output_dir=output_dir,
#         overwrite_output_dir=True,
#         num_train_epochs=epochs,
#         per_device_train_batch_size=batch_size,
#         save_steps=1000,
#         save_total_limit=2,
#         learning_rate=lr,
#     )

#     # Create Trainer instance and start training
#     trainer = Trainer(
#         model=model,
#         args=training_args,
#         data_collator=data_collator,
#         train_dataset=train_dataset,
#     )

#     trainer.train()

# trainer.train()
# # Save the model and tokenizer
# model.save_pretrained(output_dir)
# tokenizer.save_pretrained(output_dir)

from flask import Flask, request, jsonify
from transformers import GPT2LMHeadModel, GPT2Tokenizer, pipeline
import pickle


print("started")


# Initialize Flask app
app = Flask(__name__)

# Load the fine-tuned model and tokenizer
model_path = "./output_dir"

# Load the trained model from the pickle file
with open('trained_model.pkl', 'rb') as f:
    model = pickle.load(f)

# Initialize tokenizer and generator only if model is loaded successfully
if model:
    tokenizer = GPT2Tokenizer.from_pretrained(model_path)
    generator = pipeline("text-generation", model=model, tokenizer=tokenizer)

    # Define route for generating content
    @app.route('/generate_content', methods=['POST'])
    def generate_content():
        if not model:
            return jsonify({'error': 'Model not loaded. Please train the model first.'}), 500

        # Get the prompt from the request data
        data = request.json
        prompt = data['prompt']

        # Generate content based on the prompt
        generated_text = generator(prompt, max_length=200, num_return_sequences=3)

        # Extract the generated content
        generated_contents = [sample['generated_text'] for sample in generated_text]

        # Return the generated content as JSON response
        return jsonify({'generated_content': generated_contents})

if __name__ == '__main__':
    app.run(debug=True)


prompt = "Platform: Instagram\nTarget audience: GenZ\nPurpose: telling about the trip to miami\n"

# Generate content based on the prompt
generated_text = generator(prompt, max_length=200, num_return_sequences=3)

# Display the generated content
for i, sample in enumerate(generated_text, start=1):
    print(f"Generated content {i}:\n{sample['generated_text']}\n")




