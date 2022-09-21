import { Entypo, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from '../colors';
import Feed from './Feed';
const catImageUrl = "https://seeklogo.com/images/W/whatsapp-icon-logo-8CA4FB831E-seeklogo.com.png";

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color={colors.gray} style={{marginLeft: 15}}/>
            ),
            headerRight: () => (
                <Image
                    source={{ uri: catImageUrl }}
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 15,
                    }}
                />
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Feed/>
            <View style={styles.alinhamentoBotao}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Chat")}
                    style={styles.chatButton}>
                    <Entypo name="chat" size={24} color={colors.lightGray} />
                </TouchableOpacity>
            </View>
         
        </View>
    );
    };

    export default Home;

    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            // justifyContent: 'flex-start',
            // alignItems: 'flex-start',
            backgroundColor: "#fff",
        },
        alinhamentoBotao: {
           // flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: "#fff",
        },
        chatButton: {
            backgroundColor: colors.primary,
            height: 50,
            width: 50,
            justifyContent: 'flex-end',

            alignItems: 'flex-end',
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.primary,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 8,
            marginRight: 20,
            marginBottom: 50,
        }
    });