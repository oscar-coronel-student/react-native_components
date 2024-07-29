import { SectionList, Text, View } from "react-native";
import { Header } from "../components/Header";
import { Casas } from "../interfaces/general";
import { sectionListStyle } from "../theme/appTheme";
import { FlatListMenuSeparator } from "../components/FlatListMenuSeparator";

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", ]
    }
];

export const SectionListScreen = () => {

    const RenderHeader = () => {
        return <>
            <View style={[ sectionListStyle.generalHeaderTitleContent ]}>
                <Text style={[ sectionListStyle.generalHeaderTitle ]}>COMICS COMPANIES</Text>
            </View>
        </>
    }

    const RenderFooter = () => {
        return <>
            <View style={[ sectionListStyle.generalFooterTitleContent ]}>
                <Text style={[ sectionListStyle.generalFooterTitle ]}>Total de casas: { casas.length }</Text>
            </View>
        </>
    }

    return (
        <>
            <Header />
            <View style={{ flex: 1 }}>
                <SectionList
                    sections={casas}
                    keyExtractor={(item, index) => item + index}

                    ListHeaderComponent={ <RenderHeader /> }
                    ListFooterComponent={ <RenderFooter /> }

                    SectionSeparatorComponent={ FlatListMenuSeparator }
                    ItemSeparatorComponent={ FlatListMenuSeparator }
                    
                    stickySectionHeadersEnabled
                    renderItem={({ item }) => (
                        <Text style={[ sectionListStyle.listItemText ]}>{item}</Text>
                    )}

                    renderSectionHeader={({ section: { casa } }) => (
                        <View style={[ sectionListStyle.headerTitleContent ]}>
                            <Text style={[ sectionListStyle.headerTitle ]}>{casa}</Text>
                        </View>
                    )}
                    renderSectionFooter={ ({ section: { data } }) => (
                        <View style={[ sectionListStyle.headerTitleContent ]}>
                            <Text style={[ sectionListStyle.headerTitle ]}>Superheroes: {data.length}</Text>
                        </View>
                    ) }

                    

                    showsVerticalScrollIndicator={ false }
                />
            </View>
        </>
    )
}