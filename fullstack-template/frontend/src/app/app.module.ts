import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SidebarMenuComponent } from './pages/TV/sidebar-menu/sidebar-menu.component';
import { HomepageTVComponent } from './pages/TV/homepage-tv/homepage-tv.component';
import { LiveGamesComponent } from './pages/TV/live-games/live-games.component';
import { VideoTVComponent } from './pages/TV/video-tv/video-tv.component';
import { MenuIndicatorComponent } from './pages/TV/menu-indicator/menu-indicator.component';
import { TitleTagComponent } from './pages/TV/title-tag/title-tag.component';
import { VideosRowComponent } from './pages/TV/videos-row/videos-row.component';
import { VideosRow1Component } from './pages/TV/videos-row1/videos-row1.component';
import { VideosRow3Component } from './pages/TV/videos-row3/videos-row3.component';
import { VotestatsComponent } from './pages/AugmTable/votestats/votestats.component';
import { Votestep1Component } from './pages/AugmTable/votestep1/votestep1.component';
import { Votestep2Component } from './pages/AugmTable/votestep2/votestep2.component';
import { LiveinfosComponent } from './pages/AugmTable/liveinfos/liveinfos.component';
import { LiveMatchComponent } from './pages/TV/live-match/live-match.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    HomepageTVComponent,
    LiveGamesComponent,
    VideoTVComponent,
    MenuIndicatorComponent,
    TitleTagComponent,
    VideosRowComponent,
    VideosRow1Component,
    VideosRow3Component,
    VotestatsComponent,
    Votestep1Component,
    Votestep2Component,
    LiveinfosComponent,
    LiveMatchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
