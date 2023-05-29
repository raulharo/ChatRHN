package org.example;

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
        System.out.println("Please enter a prompt for the AI: ");
        String userInput = scanner.nextLine();

        String prompt = """
                {
                    "model": "gpt-3.5-turbo",
                    "messages": [
                        {
                            "role": "system",
                            "content": "You are sassy and give sassy answers to responses"
                        },
                        {
                            "role": "user",
                            "content": "%s"
                        }
                    ]
                }
                """.formatted(userInput);
        try {
            System.out.println("The AI's response: \n" + caller.promptAi(prompt));
        }
        catch (IOException e) {
            System.out.println("IO Exception thrown!");
        }
        catch (InterruptedException e) {
            System.out.println("Interrupted Exception thrown!");
        }
    }
}