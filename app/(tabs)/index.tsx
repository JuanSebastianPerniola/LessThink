import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from '../styles/Styles';

export default function UserPr() {
  const [ingredients, setIngredients] = useState('');
  const [loading, setLoading] = useState(false);
  const API_URL = "YOUR_HUGGING_FACE_API_ENDPOINT"; // reemplaza con tu endpoint de Hugging Face
  const API_KEY = 'YOUR_HUGGING_FACE_API_KEY'; // reempl

 const fetchRecipeHF = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`, // tu token de Hugging Face
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: `Genera una receta sencilla con estos ingredientes: ${ingredients}`,
        parameters: { max_new_tokens: 200 },
      }),
    });

    const data = await response.json();
    console.log("Respuesta Hugging Face:", data);

    if (data.error) {
      alert("Error en la API: " + data.error);
    } else {
      alert("Receta generada:\n" + data[0].generated_text);
    }
  } catch (error) {
    console.error("Error al llamar a Hugging Face:", error);
    alert("Error al conectar con la API");
  }
};


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <LinearGradient
        colors={['#E6F9F0', '#FFFFFF']}
        style={styles.container} // usamos tu estilo container original
      >
        {/* ICONO USUARIO ARRIBA DERECHA */}
        <Ionicons
          name="person-circle-outline"
          size={48} // 4% más pequeño que 50
          color="#145A32"
          style={styles.userIcon}
        />

        {/* TEXTO EXPLICATIVO */}
        <Text style={styles.explanationText}>
          Escribe los ingredientes que tienes en casa y te mostraremos recetas que puedes preparar.
        </Text>

        {/* INPUT + BOTÓN */}
        <View style={styles.centerContent}>
          <LinearGradient
            colors={['#E6F9F0', '#FFFFFF']} // mismo degradado que tu fondo
            style={styles.gradientBorder}
          >
            <TextInput
              style={styles.boxInput}
              placeholder="Escribe lo que tienes en casa..."
              placeholderTextColor={"#000000ff"} // color del placeholder
              value={ingredients}

              onChangeText={setIngredients}
            />
          </LinearGradient>

          <TouchableOpacity style={styles.button} onPress={fetchRecipeHF}>
            <Text style={styles.buttonText}>
              {loading ? "Generando..." : "Buscar receta"}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
