import { memo } from 'react';
import { StyleSheet } from 'react-native';
import { FadeInImage } from './FadeInImage';


interface Props {
    item: number
}

export const InfiniteScrollItem = memo(({ item }: Props) => {

    console.log('----------------render:', item);

    return (
        <>
            <FadeInImage 
                uri={ `https://picsum.photos/id/${ item }/350/400` } 
                fadeDuration={ 300 }
            />
            {
                /*<Image
                    source={{
                        uri: `https://picsum.photos/id/${ item }/350/400`,
                    }}
                    style={{
                        height: 400,
                    }}
                    fadeDuration={ 0 }
                />*/
            }
        </>
    )
})


const styles = StyleSheet.create({
})