package fr.cnam.nfa024.jpmena.firebasedatabase;

import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class MainActivity extends AppCompatActivity {

    private static final String URLSALLES = "https://geolocalisation-indoor.firebaseio.com/cnamacces31.json";
    private static final String TAG = "MAINFirebase";


    private class BackgroundOperation extends AsyncTask<String, Void, JSONObject> {

        @Override
        protected JSONObject doInBackground(String... params){
            //Your network connection code should be here .
            String urlString = params[0];
            JSONObject response = null;
            try {
                response = getJSONObjectFromURL(urlString);
            } catch (IOException e) {
                Log.e(TAG, "probbleme de lecture du json salles:"+ e.getMessage());
            } catch (JSONException e) {
                Log.e(TAG, "probbleme de parsing du json salles:"+ e.getMessage());
            }
            return response ;
        }

        @Override
        protected void onPostExecute(JSONObject cnam31Json) {
            JSONArray sallesArray = null;
            JSONArray mouvementsArray = null;
            try {
                sallesArray = cnam31Json.getJSONArray("salles");

                for (int i = 0 ; i < sallesArray.length(); i++) {
                    try {
                        JSONObject obj = sallesArray.getJSONObject(i);
                        Integer idSalle = obj.getInt("_id");
                        String nomSalle = obj.getString("numero_salle");
                        Log.i(TAG, "Salle de _id:" + idSalle + " et de nom:" + nomSalle);
                    }catch (JSONException e){
                        Log.w(TAG, "erreur de parsing de l'élément salle "+i+ " cause:"+e.getMessage());
                        continue;
                    }
                }
             }  catch (JSONException e1) {
                Log.e(TAG, "erreur de parsing JSON des salles:"+ e1.getMessage());
            }
            try {
                mouvementsArray = cnam31Json.getJSONArray("mouvements");

                for (int i = 0 ; i < mouvementsArray.length(); i++) {
                    try {
                        JSONObject obj = mouvementsArray.getJSONObject(i);
                        Integer from = obj.getInt("de");
                        Integer to = obj.getInt("a");
                        String mouvement = obj.getString("mouvement");
                        Log.i(TAG, "On va de (id):" + from + " vers (id):" + to + " via le déplacement:"+mouvement);
                    }catch (JSONException e){
                        Log.w(TAG, "erreur de parsing de l'élément mouvement "+i+ " cause:"+e.getMessage());
                        continue;
                    }
                }
            }  catch (JSONException e1) {
                Log.e(TAG, "erreur de parsing JSON des mouvements:"+ e1.getMessage());
            }
        }

        @Override
        protected void onPreExecute() {}

        @Override
        protected void onProgressUpdate(Void... values) {}
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void fetchSalles(View v){
        BackgroundOperation backgroundOperation= new BackgroundOperation();
        backgroundOperation.execute(URLSALLES);
    }

    public void fetchParcours(View v){

    }

    public static JSONObject getJSONObjectFromURL(String urlString) throws IOException, JSONException {
        HttpURLConnection urlConnection = null;
        URL url = new URL(urlString);
        urlConnection = (HttpURLConnection) url.openConnection();
        urlConnection.setRequestMethod("GET");
        urlConnection.setReadTimeout(10000 /* milliseconds */ );
        urlConnection.setConnectTimeout(15000 /* milliseconds */ );
        urlConnection.setDoOutput(true);
        urlConnection.connect();

        BufferedReader br = new BufferedReader(new InputStreamReader(url.openStream()));
        StringBuilder sb = new StringBuilder();

        String line;
        while ((line = br.readLine()) != null) {
            sb.append(line + "\n");
        }
        br.close();

        String jsonString = sb.toString();
        Log.i(TAG,jsonString);

        return new JSONObject(jsonString);
    }
}
