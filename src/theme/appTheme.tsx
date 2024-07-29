import { StyleSheet } from 'react-native';


export const appDefaultStyle = {
    primary: 'navy'
}

export const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black'
    },
})

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemContainerBody1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemContainerBody2: {
        marginRight: 10
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    }
})

export const textInputStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    textInput: {
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius: 7,
        marginVertical: 5
    },
})

export const animation103Style = StyleSheet.create({
    container: {
        flex: 1,
    },
    switchContent: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    switchRow: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    switchText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export const sectionListStyle = StyleSheet.create({
    generalHeaderTitleContent: {
        alignItems: 'center',
        paddingVertical: 10
    },
    generalHeaderTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    generalFooterTitleContent: {
        alignItems: 'center',
        paddingVertical: 10
    },
    generalFooterTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'lightgray'
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    headerTitleContent: {
        backgroundColor: 'white',
        padding: 10
    },
    listItemText: {
        paddingHorizontal: 10,
        paddingVertical: 5
    }
})