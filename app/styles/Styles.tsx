import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5', // fondo que combina con el botón
        paddingHorizontal: 20,
        justifyContent: 'center', // centra verticalmente el contenido
    },

    // Icono de usuario a la derecha, ajustable verticalmente con 'top'
    userIcon: {
        position: 'absolute',
        right: 20,
        top: '7%', // se adapta a la altura de la pantalla
    },

    // Texto explicativo justo encima del formulario
    explanationText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 12, // espacio entre texto y el formulario
        color: '#888', // gris para buen contraste
        paddingHorizontal: 50,
    },
    // Contenedor centrado para el formulario (input + botón)
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20, // separa el formulario del texto
        // opacity
    },

    gradientBorder: {
        width: '100%',
        borderRadius: 10,
    },

    boxInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#4CAF50', // Verde como tu botón
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)', // fondo semitransparente
        color: '#000000ff', // texto negro para mejor legilibidad
    },

    button: {
        backgroundColor: '#2ECC71', // azul brillante
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff', // más contraste con verde
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;
