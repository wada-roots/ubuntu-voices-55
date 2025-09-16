import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, BookOpen, ArrowRight } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Afrika lugha ipi moja ya kuzungumza!",
      author: "Masaki Magack",
      excerpt: "Leo hii naomba mniazime dakika moja mniskize kwa makini. Ninalo jambo ambalo limenikosesha usingizi kwa mda mrefu! Na ni mjadala ambao labda umeibua hisia sitomfahamu...",
      content: `Leo hii naomba mniazime dakika moja mniskize kwa makini. Ninalo jambo ambalo limenikosesha usingizi kwa mda mrefu! Na ni mjadala ambao labda umeibua hisia sitomfahamu kila ninapokutana na wAfrika wenzangu hadi ile siku nilipojipata kwenye muktadha wa aibu sana.

Mnaeza kukubaliana au msikubaliane nami ila Afrika inahitaji lugha ya kuwasiliana angalau kila sehemu. Ila hatuna maelewano ni lugha ipi tunafaa kuizungumza kama waAfrika ili tuelewane badala ya kuonekana ni kana mwamba hatujuani.

Sisi tunaishi kilomita chache kutoka makao yetu yanayotenganishwa na laini isiyoonekana ambayo mkoloni aliiita mpaka. Sikujua jinsi ya kuliweka wazi hadi mwaka 2023 nipokuwa nkisafiri Kwenda Toronto mji mkuu wa Canada niliahibika kwenye ndege ya wahabeshi. Mle ndani nilikuwa nimeketi Katikati mwa mkongo na mganda. Uganda ni nchi iliyopakana na kenya mojawapo ya nchi za Jumuiya ya Afrika mashariki na Congo ikiwa Katikati mwa Afrika.

Mganda anaelewa kizungu na anakizungumza vema ila matata na aibu ni kuwa hajui Kiswahili. Mkenya ambaye ni mimi, nilijua vema kuzungma kizungu na kiswahili mufti. Mkongo naye anjaribu sana ila ulimi unakataa kuzungumza Kiswahili tunachokielewa, anazungumza kifanransa vema ila kizungu nacho hajui hata herufi moja.

Kazi yangu ya kuwa mkalimani aka 'mediator' na naomba nitohoe kidogo ikangoa nanga. Kila wakati aliyekando alipotaka kuzungumza ilibidi wanipe hadithi nicheke halafu nigeuke nitafsiri halafu mwingine apate mzaha acheke baadaye. Haikuwa kazi rahisi ila ilikuwa kazi ya bwerere, yaani kazi bila malipo. Sasa hivi ninachokisema mni kuwa, hadi hii karne ya ishirini na moja, hatutambui kwamba mawasiliano ya moja kwa moja na kuelewana ni jambo la dharura ? La sivo tutakuwa bubu tunapokutana.

Suluhu ni lipi?

Labda, tunafaa tuanzwe kuangazie sera za mababu zetu ambai ndo waanzilishi wa lugha zetu. Mwalimu Nyerere Tanzania nchi inayopakana nak chi yangu Kenya ninakotoka aliwafundisha watanganyika kwamba ujamii ni jambo la muhimu hivyo Kiswahili ndo lugha ya kuhakikisha hatutengani kama wAfrika ila tutangamane kama watu wa ukoo mmoja. Baadaye, nchi tofauti labda tuhakikishe kwamba kuanzia shule za chekechea, Kiswahili kinafundishwa. Lugha sasa ziwe ni tatu angalau. Lugha ya mama, Lugha ya Kiswahili bure bila malipo halafu lugha ya kimombo kulingana na mbeberu wa nchi unayotoka.

Baadaye, inabidi sisi waliokatika academia, tuhakikishe kwamba kunavyo vitabu tunavyovichapisha mitandaoni kila kukuchao na kukuchweo, lakini pia jua kwamba vitabu hivi visiuzwe, view ni vya bei nafuu au bure. Elimu yafaa ipewe kila mmoja kwa usawa.

Acha niseme kwamba sitaki aibu tena ya kuwa mkalimani haswa wa wafrika, jamani mnajua lugha zingine vema ila hamwezi elewana na mnasema kwamba nyinyi ni wamoja!? Tafakari haya ili tuweze kuhifadhi 'African Indigneous languages'. Ni hayo tu kwa sasa. Aibu initoke sasa haaa`,
      publishDate: "December 15, 2024",
      readTime: "8 min",
      category: "Cultural Commentary",
      language: "Kiswahili"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-heritage text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">Articles</h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-6">
              Thoughts and Reflections on African Heritage
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Read insightful articles about African languages, culture, and the 
              importance of preserving our indigenous knowledge for future generations.
            </p>
          </div>
        </div>
      </div>

      {/* Articles Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Featured Article */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
          
          {articles.map((article) => (
            <Card key={article.id} className="border-heritage-green/20">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-heritage-red text-heritage-red">
                    {article.category}
                  </Badge>
                  <Badge variant="secondary" className="bg-ubuntu/20 text-ubuntu-foreground">
                    {article.language}
                  </Badge>
                </div>
                
                <CardTitle className="text-3xl lg:text-4xl mb-4">
                  {article.title}
                </CardTitle>
                
                <div className="flex items-center gap-6 text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>by {article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{article.readTime} read</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="bg-card border border-heritage-green/20 rounded-lg p-6">
                    <div className="whitespace-pre-line text-foreground leading-relaxed">
                      {article.content}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-4">
                    <Button variant="heritage" size="lg">
                      Share Article
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    Published on {article.publishDate}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center py-16">
          <div className="max-w-2xl mx-auto">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-heritage-green" />
            <h3 className="text-2xl font-bold mb-4">More Articles Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              We're working on bringing you more insightful articles about African heritage, 
              languages, and cultural preservation. Stay tuned for updates!
            </p>
            <Button variant="outline" size="lg">
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;