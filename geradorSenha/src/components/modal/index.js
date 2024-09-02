import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native"



export function ModalPassword() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada </Text>
                <Pressable style={styles.innerPassword}>
                    <Text style={styles.text}>
                        123
                    </Text>
                </Pressable>

                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btnVoltar}>
                        <Text style={styles.textVoltar}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSalvar}>
                        <Text style={styles.textSalvar}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24,24,24, 0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },

    content: {
        backgroundColor: "#FFF",
        borderRadius: 8,
        width: "85%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 24,
        paddingBottom: 24,

    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        textTransform: "uppercase",
        color: "#000",
        paddingBottom: 18,
    },
    innerPassword: {
        borderRadius: 8,
        backgroundColor: "#E6E6E6",
        width: "90%",
        padding: 14
    },
    text: {
        textAlign: "center",
        fontWeight: "bold"
    },
    btnArea: {
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30

    },
    btnVoltar: {
        flex: 1,
        backgroundColor: "#000",
        borderRadius: 8,
        padding: 8,
        alignItems: "center",
        marginRight: 10


    },
    btnSalvar: {
        flex: 1,
        backgroundColor: "#fff",
        border: "solid 1px black",
        borderRadius: 8,
        padding: 8,
        alignItems: "center",
        marginLeft: 10


    },

    textVoltar: {
        color: "#fff"
    }
})