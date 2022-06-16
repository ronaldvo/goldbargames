import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  IndexView,
  Home as HomeView
} from './views';

// Documentation pages
import {
  Introduction as IntroductionView,
  QuickStartReactScripts as QuickStartReactScriptsView,
  QuickStartNextJS as QuickStartNextJSView,
  QuickStartGatsbyJS as QuickStartGatsbyJSView,
  Colors as ColorsView,
  TypographyComponent as TypographyComponentView,
  Shadows as ShadowsView,
  PageComponent as PageComponentView,
  ContainerComponent as ContainerComponentView,
  Layouts as LayoutsView,
  Support as SupportView,
  Icons as IconsView,
  Illustrations as IllustrationsView,
  ChangeLog as ChangeLogView,
} from './views/docs';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" render={() => <IndexView />} />
      <Route exact path="/home" render={() => <HomeView />} />
      {/* <Route
        exact
        path="/customers"
        render={() => <CustomersView />}
      />
      <Route
        exact
        path="/hire-us"
        render={() => <HireUsView />}
      />
      <Route
        exact
        path="/faq"
        render={() => <FaqView />}
      />
      <Route
        exact
        path="/career-listing"
        render={() => <CareerListingView />}
      />
      <Route
        exact
        path="/career-listing-minimal"
        render={() => <CareerListingMinimalView />}
      />
      <Route
        exact
        path="/career-opening"
        render={() => <CareerOpeningView />}
      />
      <Route exact path="/contact-page" render={() => <ContactPageView />} />
      <Route exact path="/coworking" render={() => <CoworkingView />} />
      <Route exact path="/e-learning" render={() => <ElearningView />} />
      <Route exact path="/enterprise" render={() => <EnterpriseView />} />
      <Route exact path="/service" render={() => <ServiceView />} />
      <Route exact path="/web-basic" render={() => <WebBasicView />} />
      <Route exact path="/desktop-app" render={() => <DesktopAppView />} />
      <Route exact path="/expo" render={() => <ExpoView />} />
      <Route exact path="/agency" render={() => <AgencyView />} />
      <Route exact path="/startup" render={() => <StartupView />} />
      <Route
        exact
        path="/design-company"
        render={() => <DesignCompanyView />}
      />
      <Route exact path="/mobile-app" render={() => <MobileAppView />} />
      <Route exact path="/job-listing" render={() => <JobListingView />} />
      <Route exact path="/rental" render={() => <RentalView />} />
      <Route exact path="/cloud-hosting" render={() => <CloudHostingView />} />
      <Route exact path="/logistics" render={() => <LogisticsView />} />
      <Route exact path="/e-commerce" render={() => <EcommerceView />} />
      <Route exact path="/pricing" render={() => <PricingView />} />
      <Route exact path="/about" render={() => <AboutView />} />
      <Route exact path="/help-center" render={() => <HelpCenterView />} />
      <Route
        exact
        path="/help-center-article"
        render={() => <HelpCenterArticleView />}
      />
      <Route
        exact
        path="/portfolio-page"
        render={() => <PortfolioPageView />}
      />
      <Route
        exact
        path="/portfolio-masonry"
        render={() => <PortfolioMasonryView />}
      />
      <Route
        exact
        path="/portfolio-grid"
        render={() => <PortfolioGridView />}
      />
      <Route exact path="/company-terms" render={() => <CompanyTermsView />} />
      <Route
        exact
        path="/contact-sidebar-map"
        render={() => <ContactPageSidebarMapView />}
      />
      <Route
        exact
        path="/contact-page-cover"
        render={() => <ContactPageCoverView />}
      />
      <Route
        exact
        path="/about-side-cover"
        render={() => <AboutSideCoverView />}
      />
      <Route exact path="/blog-search" render={() => <BlogSearchView />} />
      <Route exact path="/blog-newsroom" render={() => <BlogNewsroomView />} />
      <Route exact path="/blog-article" render={() => <BlogArticleView />} />
      <Route
        exact
        path="/blog-reach-view"
        render={() => <BlogReachViewView />}
      />
      <Route
        exact
        path="/password-reset-cover"
        render={() => <PasswordResetCoverView />}
      />
      <Route
        exact
        path="/password-reset-simple"
        render={() => <PasswordResetSimpleView />}
      />
      <Route exact path="/signin-simple" render={() => <SigninSimpleView />} />
      <Route exact path="/signin-cover" render={() => <SigninCoverView />} />
      <Route exact path="/signup-simple" render={() => <SignupSimpleView />} />
      <Route exact path="/signup-cover" render={() => <SignupCoverView />} />
      <Route
        exact
        path="/account-billing"
        render={() => <AccountBillingView />}
      />
      <Route
        exact
        path="/account-general"
        render={() => <AccountGeneralView />}
      />
      <Route
        exact
        path="/account-notifications"
        render={() => <AccountNotificationsView />}
      />
      <Route
        exact
        path="/account-security"
        render={() => <AccountSecurityView />}
      />
      <Route exact path="/not-found" render={() => <NotFoundView />} />
      <Route
        exact
        path="/not-found-cover"
        render={() => <NotFoundCoverView />}
      />
      <Route exact path="/docs" render={() => <IntroductionView />} />
      <Route
        exact
        path="/docs/introduction"
        render={() => <IntroductionView />}
      />
      <Route
        exact
        path="/docs/quick-start-react-scripts"
        render={() => <QuickStartReactScriptsView />}
      />
      <Route
        exact
        path="/docs/quick-start-nextjs"
        render={() => <QuickStartNextJSView />}
      />
      <Route
        exact
        path="/docs/quick-start-gatsbyjs"
        render={() => <QuickStartGatsbyJSView />}
      />
      <Route exact path="/docs/colors" render={() => <ColorsView />} />
      <Route
        exact
        path="/docs/typography"
        render={() => <TypographyComponentView />}
      />
      <Route exact path="/docs/shadows" render={() => <ShadowsView />} />
      <Route exact path="/docs/page" render={() => <PageComponentView />} />
      <Route
        exact
        path="/docs/container"
        render={() => <ContainerComponentView />}
      />
      <Route exact path="/docs/layouts" render={() => <LayoutsView />} />
      <Route exact path="/docs/icons" render={() => <IconsView />} />
      <Route
        exact
        path="/docs/illustrations"
        render={() => <IllustrationsView />}
      />
      <Route exact path="/docs/support" render={() => <SupportView />} />
      <Route exact path="/docs/change-log" render={() => <ChangeLogView />} />
      <Redirect to="/not-found-cover" /> */}
    </Switch>
  );
};

export default Routes;
