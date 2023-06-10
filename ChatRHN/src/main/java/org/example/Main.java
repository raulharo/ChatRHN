package org.example;

import org.example.model.GptMessageModel;
import org.example.model.GptRequestBodyModel;
import org.example.service.ApiCallHandler;

import java.io.IOException;
import java.util.Scanner;

public class Main {
    private Scanner scanner = new Scanner(System.in);
    private ApiCallHandler caller = new ApiCallHandler();
    public static void main(String[] args) {
        Main app = new Main();
        app.run();
    }

    public void run() {
        String userInput = " ";
        caller.initializeConversation();

        while (true) {
            System.out.println("Please enter a prompt for the AI: ");
            userInput = scanner.nextLine();

            if (userInput.equals("") || userInput.equals("exit")) {
                break;
            }

            GptMessageModel nextPrompt = new GptMessageModel("user", userInput);

            try {
                String response = caller.promptAi(nextPrompt);
                System.out.println("The AI's response: \n" + response);
            } catch (IOException e) {
                System.out.println("IO Exception thrown!");
            } catch (InterruptedException e) {
                System.out.println("Interrupted Exception thrown!");
            }
        }
    }
}