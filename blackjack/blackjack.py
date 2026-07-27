import random

DECK = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']


def deal():
    return random.choice(DECK)


def value_of_card(card):

    if card in ('J', 'Q', 'K'):
        return 10
    if card == 'A':
        return 1
    return int(card)


def hand_total(hand):
    total = sum(value_of_card(card) for card in hand)

    if 'A' in hand and total + 10 <= 21:
        total += 10
    return total


def higher_card(card_one, card_two):
    value_one = value_of_card(card_one)
    value_two = value_of_card(card_two)

    if value_one > value_two:
        return card_one
    if value_one < value_two:
        return card_two
    return card_one, card_two


def value_of_ace(card_one, card_two):

    def card_value(card):
        if card == 'A':
            return 11
        return value_of_card(card)

    if card_value(card_one) + card_value(card_two) + 11 <= 21:
        return 11
    return 1


def is_blackjack(card_one, card_two):

    cards_value_ten = {'10', 'K', 'J', 'Q'}

    return (
        (card_one == 'A' and card_two in cards_value_ten) or
        (card_one in cards_value_ten and card_two == 'A')
    )


def can_split_pairs(card_one, card_two):

    return value_of_card(card_one) == value_of_card(card_two)


def can_double_down(card_one, card_two):

    double_down_values = {9, 10, 11}

    return value_of_card(card_one) + value_of_card(card_two) in double_down_values


def play():
    player = [deal(), deal()]
    dealer = [deal(), deal()]

    print(f"Dealer shows: {dealer[0]}")
    print(f"Player's hand: {player} | Total: {hand_total(player)}")

    if is_blackjack(player[0], player[1]):
        print("Blackjack! You win!")
        return

    while hand_total(player) < 21:
        move = input("Hit or Stay? (h/s): ").strip().lower()

        if move == 'h':
            player.append(deal())
            print(f"Player's hand: {player} | Total: {hand_total(player)}")
        elif move == 's':
            break

    if hand_total(player) > 21:
        print("You busted! Dealer wins.")
        return

    print(f"Dealer's hand: {dealer} | Total: {hand_total(dealer)}")
    while hand_total(dealer) < 17:
        dealer.append(deal())
        print(f"Dealer's hits: {dealer} | Total: {hand_total(dealer)}")

    player_total = hand_total(player)
    dealer_total = hand_total(dealer)

    if player_total > dealer_total or dealer_total > 21:
        print("You win!")
    elif player_total < dealer_total:
        print("You lose. Dealer wins.")
    else:
        print("It's a tie!")


play()
