package org.example.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.dao.HandlerDao;
import org.example.model.GptRequestBodyModel;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class ApiCallHandler implements HandlerDao {
    private final String OPENAI_URL = "https://api.openai.com/v1/chat/completions";
    private final String API_KEY = System.getenv("API_KEY");
    private ObjectMapper mapper = new ObjectMapper();
    private RestTemplate restTemplate = new RestTemplate();
    private HttpHeaders headers = new HttpHeaders();

    @Override
    public String promptAi(GptRequestBodyModel conversation) {
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + API_KEY);

        HttpEntity<GptRequestBodyModel> entity = new HttpEntity<>(conversation, headers);

        ResponseEntity<String> jsonResponse = restTemplate.postForEntity(OPENAI_URL, entity, String.class);

        if (jsonResponse.getStatusCode().is2xxSuccessful()) {
            return parseJson(jsonResponse);
        }
        else {
            return "Bad Request, it seems.";
        }
    }

    public String parseJson(ResponseEntity<String> jsonResponse) {
        String aiMessageString = "";
        try {
            String rawJson = jsonResponse.getBody();
            JsonNode topNode = mapper.readTree(rawJson);
            JsonNode choices = topNode.path("choices");

            for (JsonNode node: choices) {
                JsonNode aiMessage = node.path("message").path("content");
                aiMessageString = aiMessage.asText();
            }

            if(!aiMessageString.equals("")) {
                return aiMessageString;
            }
        }
        catch (JsonProcessingException e) {
            System.err.println("Error Processing Json");
        }

        return "";
    }
}
