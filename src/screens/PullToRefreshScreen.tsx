import { RefreshControl, ScrollView, Text, View } from "react-native";

import { Header } from "../components/Header";
import { useCallback, useState } from "react";


export const PullToRefreshScreen = () => {

    const [isRefreshing, setIsRefreshing] = useState(false);
    const [data, setData] = useState<string>('');

    const handleRefresh = useCallback(() => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
            setData('Hola mundo');
        }, 3000);
    }, []);

    return (
        <>
            <Header />
            <ScrollView
                refreshControl={ 
                    <RefreshControl 
                        refreshing={ isRefreshing } 
                        onRefresh={ handleRefresh }
                        progressViewOffset={ 50 }
                        progressBackgroundColor='red'
                        colors={['white']}
                        style={{ backgroundColor: 'brown' }}
                        tintColor='yellow'
                        title="Refreshing"
                        titleColor='yellow'
                    /> 
                }
            >
                <View>
                    <Text>
                        { data }
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}
