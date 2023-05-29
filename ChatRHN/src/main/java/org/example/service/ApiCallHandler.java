package org.example.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpHeaders;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import org.example.model.GptMessageModel;
import java.net.http.HttpRequest;
import java.util.Scanner;

public class ApiCallHandler {
    private final String OPENAI_URL = "https://api.openai.com/v1/chat/completions";
    private final String API_KEY = System.getenv("API_KEY");

    // Need to implement this method to send the current conversation to the openai API and receive the response to
    // display on the front end.
    public String promptAi(String message) throws IOException, InterruptedException {
        ObjectMapper mapper = new ObjectMapper();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(OPENAI_URL))
                .header( "Content-Type", "application/json")
                .header("Authorization", "Bearer " + API_KEY)
                .POST(HttpRequest.BodyPublishers.ofString(message))
                .build();

        HttpClient client = HttpClient.newHttpClient();
        var response = client.send(request, HttpResponse.BodyHandlers.ofString());

        if(response.statusCode() == 200) {
            String body = response.body();
            JsonNode poopoocaca = mapper.readTree(body);
            JsonNode scoop = poopoocaca.path("choices");

            for (JsonNode node : scoop) {
                JsonNode poop = node.path("message").path("content");
                return poop.asText();
            }
        }

        return "Cyrus is the key to the chain of apocalyptic events set to happen starting March 43rd 2043";
    }
}
