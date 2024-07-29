import { useState, useRef } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { InfiniteScrollItem } from '../components/InfiniteScrollItem';


export const InfiniteScrollScreen = () => {

    const isScrollingRef = useRef<boolean>(false);

    const [numbers, setNumbers] = useState<number[]>([0,1,2,3,4,5]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loadMore = () => {
        console.log('LOAD MORE');
        setIsLoading(true);
        const newNumbers: number[] = JSON.parse(JSON.stringify(numbers));
        for(let iterator = 1 ; iterator <= 5 ; iterator++){
            newNumbers.push( newNumbers.length );
        }
        setIsLoading(false);
        setNumbers( newNumbers );
    }

    const RenderHeader = () => {
        return <>
            <View style={[ styles.headerContent ]}>
                <Text>LISTADO DE NÚMEROS</Text>
            </View>
        </>
    }
    const RenderFooter = () => {
        return <>
            {
                isLoading && <>
                    <View style={{ alignItems: 'center', height: 160, paddingTop: 15 }}>
                        <ActivityIndicator color={'gray'} size={ 30 } />
                    </View>
                </>
            }
        </>
    }

    return (
        <>
            <View style={[ styles.content ]}>
                <FlatList
                    showsVerticalScrollIndicator={ false }
                    data={ numbers }
                    keyExtractor={ (item) => `${ item }` }
                    ListHeaderComponent={ <RenderHeader /> }
                    
                    ItemSeparatorComponent={ () => <View style={{ borderWidth: 0.3, borderColor: 'white' }} /> }
                    renderItem={ ({ item }) => <InfiniteScrollItem item={ item } /> }

                    ListFooterComponent={ <RenderFooter /> }

                    onScroll={ () => isScrollingRef.current = true }
                    onEndReached={ () => {
                        if(isScrollingRef.current){
                            loadMore();
                        }
                    }}
                    onEndReachedThreshold={ 0 }
                /> 
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    headerContent: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 0.5
    }
})