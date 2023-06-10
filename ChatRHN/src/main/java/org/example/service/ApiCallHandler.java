package org.example.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.model.GptMessageModel;
import org.example.model.GptRequestBodyModel;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

public class ApiCallHandler {
    private final String OPENAI_URL = "https://api.openai.com/v1/chat/completions";
    private final String API_KEY = System.getenv("API_KEY");
    private GptRequestBodyModel conversation = new GptRequestBodyModel();
    private ObjectMapper mapper = new ObjectMapper();
    private RestTemplate restTemplate = new RestTemplate();
    private HttpHeaders headers = new HttpHeaders();

    public String promptAi(GptMessageModel userPrompt) throws IOException, InterruptedException {
        String aiMessageString = "";
        GptMessageModel aiResponse = new GptMessageModel();
        conversation.addMessage(userPrompt);

        HttpEntity<GptRequestBodyModel> entity = new HttpEntity<>(conversation, headers);

        ResponseEntity<String> jsonResponse = restTemplate.postForEntity(OPENAI_URL, entity, String.class);

        if (jsonResponse.getStatusCode().is2xxSuccessful()) {
            String rawJson = jsonResponse.getBody();
            JsonNode topNode = mapper.readTree(rawJson);
            JsonNode choices = topNode.path("choices");

            for (JsonNode node: choices) {
                JsonNode aiMessage = node.path("message").path("content");
                aiMessageString = aiMessage.asText();
            }

            if(!aiMessageString.equals("")) {
                conversation.addMessage(new GptMessageModel("assistant", aiMessageString));
                return aiMessageString;
            }
        }

        return "Bad Request, it seems.";
    }

    public void initializeConversation() {
        conversation.setModel("gpt-3.5-turbo");
        conversation.addMessage(new GptMessageModel("system", "You are sassy and give a sarcastic spin to all your replies."));
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + API_KEY);
    }
}
